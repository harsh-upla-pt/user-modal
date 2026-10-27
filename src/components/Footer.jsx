function Footer() {
  return (
    <footer className="w-full border-t bg-background absolute">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} YourApp. All rights reserved.
        </p>

        {/* Footer Links */}
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </a>

          <a href="/terms" className="transition-colors hover:text-foreground">
            Terms
          </a>

          <a
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
