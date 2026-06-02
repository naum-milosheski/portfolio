export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#" className="brand">
          Naum Milosheski<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#demo">See It Live</a>
          <a href="#system">The System</a>
          <a href="#how">How It Works</a>
          <a href="#contact" className="btn btn-primary">
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
