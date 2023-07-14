import drawersImage from '../../assets/images/drawers.jpg';
import avatarImage from '../../assets/images/avatar.jpg';
import styles from './Card.module.scss';

const Card = () => {
	return (
		<article className={styles.card}>
			<div className={styles['card-image']}>
				<div className={styles['card-image-inner']}>
					<img src={drawersImage} alt="" />
				</div>
			</div>
			<div className={styles['card-content']}>
				<h2 className={styles['card-title']}>
					Shift the overall look and feel by adding these wonderful
					touches to furniture in your home
				</h2>
				<p className={styles['card-desc']}>
					Ever been in a room and felt like something was missing?
					Perhaps it felt slightly bare and uninviting. I've got some
					simple tips to help you make any room feel complete.
				</p>
				<div className={styles['card-author']}>
					<div className={styles['card-author-img-box']}>
						<img
							className={styles['card-author-img']}
							width="40"
							height="40"
							src={avatarImage}
							alt="Michelle Appleton"
						/>
					</div>
					<div className={styles['card-author-info']}>
						<h3 className={styles['card-author-name']}>
							Michelle Appleton
						</h3>
						<p className={styles['card-author-post-date']}>
							28 Jun 2020
						</p>
					</div>
				</div>
				<div className={styles['card-share']}>
					<input
						type="checkbox"
						name="toggle"
						id="share-toggle"
						className={styles['card-share-checkbox']}
					/>
					<div className={styles['card-share-box']}>
						<div className={styles['card-share-action']}>
							<span className={styles['card-share-action-txt']}>
								Share
							</span>
							<ul className={styles['card-share-action-buttons']}>
								<li>
									<a href="#/" title="Share on facebook">
										<i
											className="icon-facebook"
											aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#/" title="Share on twitter">
										<i
											className="icon-twitter"
											aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#/" title="Share on pinterest">
										<i
											className="icon-pinterest"
											aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
						<label
							htmlFor="share-toggle"
							className={`btn btn--icon ${styles['btn--share-toggle']}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15"
								height="13">
								<path
									fill="currentColor"
									d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"></path>
							</svg>
						</label>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Card;
