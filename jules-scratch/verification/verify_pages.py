from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    base_url = "http://localhost:3000"
    pages = ["home", "about", "projects", "links", "contact"]

    for p in pages:
        page.goto(f"{base_url}/{p}")
        page.wait_for_timeout(1000)  # Wait for animations
        page.screenshot(path=f"jules-scratch/verification/{p}.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)