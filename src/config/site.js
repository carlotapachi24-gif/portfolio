// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://portfolio.example.com/';

export const siteConfig = {
	title: "Portfolio profesional | Carlota López Carracedo",
	author: "Carlota López Carracedo",
	url: SITE_URL,
	mail: "carlotalopecarracedo@gmail.com",
	// resume add your resume file path here: /assets/resume.pdf
	resume: "",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: "Portfolio profesional | Carlota López Carracedo",
		description: "Creadora de contenido y diseñadora gráfica especializada en branding, diseño digital y producción audiovisual.",
		keywords: "diseño grafico, branding, contenido digital, produccion audiovisual, portfolio, carlota lopez carracedo",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "",
	},
	// social links
	social:{
		twitter: `mailto:carlotalopecarracedo@gmail.com`,
		twitterName: "",
		github: "",
		blog: "",
		xiaohongshu:""
	},
};

// Footer
export const socialLinks = [
	{
		name: 'Email',
		url: 'mailto:carlotalopecarracedo@gmail.com',
		icon: `<svg class="icon ic-email" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>`
	}
];


