import { invoke } from "@tauri-apps/api/core";

let testButton: HTMLButtonElement | null;
let testResultLabel: HTMLElement | null;

async function test() {
  if (testButton && testResultLabel) {
    testResultLabel.textContent = await invoke("test", new Uint8Array([0, 1, 2]));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  testButton = document.querySelector("#test");
  testResultLabel = document.querySelector("#testResult");
  document.querySelector("#test")?.addEventListener("click", (e) => {
    e.preventDefault();
    test();
  });
});
