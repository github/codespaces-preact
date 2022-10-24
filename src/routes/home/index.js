import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>GitHub Codespaces <span class={style.heart}>♥️</span> Preact</h1>
		<img src="/assets/Octocat.png" alt="Mona" class={style.octocat} />
		<p>This is the Home component.</p>
	</div>
);

export default Home;
