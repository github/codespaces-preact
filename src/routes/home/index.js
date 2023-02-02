import style from './style.module.css';

export default function Home() {
	return (
		<div class={style.home}>
			<h1>GitHub Codespaces <span class={style.heart}>♥️</span> Preact</h1>
			<img src="/assets/Octocat.png" alt="Mona" class={style.octocat} />
			<p>This is the Home component.</p>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
