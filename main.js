const root = document.documentElement;
const label = document.getElementById("themeLabel");

function isDark() {
  if (root.dataset.theme) return root.dataset.theme === "dark";
  return matchMedia("(prefers-color-scheme: dark)").matches;
}

function updateLabel() {
  label.textContent = isDark() ? "Light Mode" : "Dark Mode";
}

// Cek tema yang tersimpan
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}

updateLabel();

// Listener untuk tombol ganti tema
document.getElementById("theme").addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
  updateLabel();
});
