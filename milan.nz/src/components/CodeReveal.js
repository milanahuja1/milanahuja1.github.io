import { useRef, useState, useCallback } from 'react';
import { useScrollReveal } from './useScrollReveal';
import './CodeReveal.css';

const SNIPPETS = [
  `def train(epochs):\n    for e in range(epochs):\n        loss = step(model)\n        scheduler.step(loss)`,
  `const handleClick = () => {\n  setOpen(o => !o);\n};`,
  `public void onClick(View v) {\n    Intent i = new Intent(this, Detail.class);\n    startActivity(i);\n}`,
  `void process(float* buf, int n) {\n    for (int i = 0; i < n; i++)\n        buf[i] *= gain;\n}`,
  `useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);`,
  `class Conv2d(nn.Module):\n    def forward(self, x):\n        return F.relu(self.conv(x))`,
  `git rebase -i HEAD~3\n# pick, squash, fixup`,
  `SELECT * FROM users\n  WHERE created_at > NOW() - INTERVAL '7 days';`,
  `if (!response.ok) {\n  throw new Error(\`HTTP \${response.status}\`);\n}`,
  `template<typename T>\nT clamp(T v, T lo, T hi) {\n    return v < lo ? lo : v > hi ? hi : v;\n}`,
  `recyclerView.setAdapter(adapter);\nadapter.notifyDataSetChanged();`,
  `npm run build\n> Compiled successfully.`,
  `model = nn.Sequential(\n    nn.Linear(784, 128),\n    nn.ReLU(),\n    nn.Linear(128, 10),\n)`,
  `for (auto& sample : buffer) {\n    sample = std::tanh(sample * drive);\n}`,
  `posts.map(post => (\n  <PostCard key={post.slug} {...post} />\n))`,
  `try {\n    db.commit();\n} catch (SQLException e) {\n    db.rollback();\n}`,
  `\\(x \\to f(x)\\)\nO(n log n)`,
  `gh pr create --title "fix" \\\n  --body "ship it"`,
  `const [count, setCount] = useState(0);`,
  `printf("hello, %s\\n", name);`,
  `awk '{print $1}' data.txt | sort -u`,
  `optimizer.zero_grad()\nloss.backward()\noptimizer.step()`,
  `glm::mat4 mvp = proj * view * model;`,
  `Promise.all(urls.map(fetch))\n  .then(rs => Promise.all(rs.map(r => r.json())))`,
  `// TODO: handle the rare case`,
  `<<<<<<< HEAD\n=======\n>>>>>>> branch`,
  `kubectl apply -f deploy.yaml`,
  `useState<{ open: boolean }>({ open: false });`,
];

const COLORS = ['#921010', '#01307c', '#55017c', '#0a6b3b', '#c46a14', '#045d6b', '#aa1457', '#3a3a3a'];

const MAX = 25;
const MIN_DISTANCE = 35;
const LIFETIME_MS = 1200;

function CodeReveal({ children, className = '' }) {
  const containerRef = useRef(null);
  const lastPos = useRef({ x: -999, y: -999 });
  const indexRef = useRef(0);
  const idRef = useRef(0);
  const [items, setItems] = useState([]);

  const spawn = useCallback((x, y) => {
    const text = SNIPPETS[indexRef.current % SNIPPETS.length];
    indexRef.current++;

    const rotation = (Math.random() - 0.5) * 16;
    const fontSize = 0.75 + Math.random() * 0.4;
    const offsetX = (Math.random() - 0.5) * 60;
    const offsetY = (Math.random() - 0.5) * 60;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const id = idRef.current++;

    setItems(prev => {
      const next = [...prev, { id, x: x + offsetX, y: y + offsetY, text, rotation, fontSize, color }];
      return next.length > MAX ? next.slice(next.length - MAX) : next;
    });

    setTimeout(() => {
      setItems(prev => prev.filter(it => it.id !== id));
    }, LIFETIME_MS);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE) return;

    lastPos.current = { x, y };
    spawn(x, y);
  }, [spawn]);

  useScrollReveal(containerRef, spawn);

  return (
    <div
      ref={containerRef}
      className={`codeReveal ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
      <div className="codeReveal-layer">
        {items.map(it => (
          <pre
            key={it.id}
            className="codeSnippet"
            style={{
              left: it.x,
              top: it.y,
              transform: `translate(-50%, -50%) rotate(${it.rotation}deg)`,
              fontSize: `${it.fontSize}rem`,
              color: it.color,
            }}
          >
            {it.text}
          </pre>
        ))}
      </div>
    </div>
  );
}

export default CodeReveal;
