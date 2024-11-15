import { useContext } from "react"
import { LanguageContext } from "../store/languageContext"

import ActionsBlock from "./ActionsBlock";

function PlayerActions() {
	const { playerInfo, setPlayerInfo } = useContext(LanguageContext)
	const basics = [
		{
			title: 'Attaque',
			action: 'principale',
			type: 'Base',
			tooltip: "Vous réalisez une attaque avec l'arme dans votre main. Appliquez les bonus de FOR ou attaquez avec vos deux mains avec votre AGI."
		},
		{
			title: 'Magie',
			action: 'principale',
			type: 'Base',
			tooltip: "Vous lancez un sort en dépassant son score de difficulté. Vous consommez votre SEN quoi qu'il arrive."
		},
		{
			title: 'Course',
			action: 'principale',
			type: 'Base',
			tooltip: "Vous avancez à vive allure de votre distance de course (MOU*2 + physique). Jetez un jet d'AGI sur terrain difficile."

		},
		{
			title: 'Remise sur pieds',
			action: 'principale',
			type: 'Base',
			tooltip: "Vous reprenez vos esprits apres une chute, une perte de conscience, un envoutement en mobilisant votre attention."
		},
		{
			title: 'Bond/Marche discrete',
			action: 'limitée',
			type: 'Base',
			tooltip: "Vous réalisez un mouvement pour sortir de la mêlée (dérobade avec jet d'AGI) ou pour avancer furtivement (pas de dérobade). Votre distance est de MOU/4."
		},
		{
			title: 'Objet/Interaction',
			action: 'limitée',
			type: 'Base',
			tooltip: "Vous utilisez un objet à trouver dans votre sac, à consommer, ou à manipuler pendant plusieurs secondes (comme pour un crochetage)."
		},
		{
			title: 'Aide',
			action: 'limitée',
			type: 'Base',
			tooltip: "Vous assistez votre compagnon dans une situation difficile et lui octroyez un avantage pour l'action envisagée s'il l'entreprend."
		},

		{
			title: 'Marche',
			action: 'gratuite',
			type: 'Base',
			tooltip: "Vous vous déplacez tranquillement de votre distance de MOU."
		},
		{
			title: 'Furtivité',
			action: 'gratuite',
			type: 'Base',
			tooltip: "Vous vous fondez dans les ombres et devenez invisible aux yeux de vos ennemis."
		},
		{
			title: 'Attente',
			action: 'gratuite',
			type: 'Base',
			tooltip: "Vous passez votre tour pour jouer apres votre prochain allié."

		},
	]
	let list = playerInfo.feats.concat(basics)

	console.log('playerInfo attackType', playerInfo.attackType);

	return (
		<div className="player-actions">
			<div className="attack-type">Attaque avec
				<label>
					AGI
					<input
						type='radio'
						name="attack"
						value='AGI'
						checked={playerInfo.attackType === 'AGI'}
						onChange={(e) => setPlayerInfo({ ...playerInfo, attackType: e.target.value })}
					/>
				</label>
				<label>
					FOR
					<input
						type='radio'
						name="attack"
						value='FOR'
						checked={playerInfo.attackType === 'FOR'}
						onChange={(e) => setPlayerInfo({ ...playerInfo, attackType: e.target.value })}
					/>
				</label>
				<p>Préparez vos techniques à votre tour, même si elles sont gratuites.</p>
			</div>
			<div className="player-feats-block">

				<ActionsBlock type="principale" list={list} />
				<ActionsBlock type="limitée" list={list} />
				<ActionsBlock type="gratuite" list={list} />
			</div>
		</div >
	)
}

export default PlayerActions