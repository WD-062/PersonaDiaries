const Footer = () => {
    return (
        <div className="w-full flex items-center justify-around mt-3 px-20 py-2 bg-base-300 shadow-sm h-20">
            <p className="m-2">
                © 2025 Personal Diaries — All rights reserved. This is my
                personal space for thoughts and memories.
            </p>
            <ul className="flex items-center gap-3">
                <li>
                    <a href="https://www.instagram.com/" target="blank">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                            alt="Instagram"
                            className="w-5 h-5"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/" target="blank">
                        <img
                            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-icon-png-image_6315986.png"
                            alt="Twitter"
                            className="w-5 h-5 rounded"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" target="blank">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png"
                            alt="Facebook"
                            className="w-5 h-5 rounded"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
