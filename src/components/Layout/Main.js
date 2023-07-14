import Card from '../Card/Card';

import styles from './Main.module.scss';

const Main = () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<Card />
			</div>
		</main>
	);
};

export default Main;
