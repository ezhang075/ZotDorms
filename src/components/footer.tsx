const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">Rate My Dorms</div>
            <p className="footer-description">The ultimate dorm review platform for UCI dorms. We help UCI students choose their perfect dorm with authentic reviews and detailed analytics.</p>
            <p className="footer-copyright">© {new Date().getFullYear()} Rate My Dorms. All rights reserved.</p> 
        </footer>
    )
}

export default Footer;