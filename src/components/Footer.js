import React from 'react';

const Footer = () => (
	<footer className="footer">
		<div className="content-container">
			<div className="footer__content">
				<div className="footer__email">
					<span>email:</span>
					<a href="mailto:ccorder2@gmail.com" target="_top">
						ccorder2@gmail.com
					</a>
				</div>
				<div className="footer__social">
					<a href="https://github.com/ccorder2" target="_blank">
						<img
							src="/images/github_black.svg"
							alt="GitHub"
							height="32"
							width="32"
						/>
					</a>
					<a href="https://www.instagram.com/ccorder2/" target="_blank">
						<img
							src="/images/instagram_black.svg"
							alt="Instagram"
							height="32"
							width="32"
						/>
					</a>
					<a href="https://www.linkedin.com/in/ccorder2" target="_blank">
						<img
							src="/images/linkedin_black.svg"
							alt="LinkedIn"
							height="32"
							width="32"
						/>
					</a>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
