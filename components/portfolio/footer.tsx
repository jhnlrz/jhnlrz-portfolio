export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          Designed & Built by{" "}
          <span className="text-foreground font-medium">John Lorezo</span>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
