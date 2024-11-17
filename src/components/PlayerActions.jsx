import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../store/languageContext"

import ActionsBlock from "./ActionsBlock";

function PlayerActions() {
	const { playerInfo } = useContext(LanguageContext)
	const [actionM, setActionM] = useState(0)
	const [actionL, setActionL] = useState(0)
	const [actionF, setActionF] = useState(0)

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
			tooltip: "Vous assistez votre compagnon dans une situation difficile et lui octroyez un avantage pour l'action envisagée, s'il l'entreprend."
		},

		{
			title: 'Marche',
			action: 'gratuite',
			type: 'Base',
			tooltip: "Vous vous déplacez tranquillement de votre distance de MOU."
		},
		{
			title: 'Furtivité',
			action: 'limitée',
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

	useEffect(() => {
		playerInfo.main ? setActionM(playerInfo.main) : setActionF(1)
		playerInfo.limited ? setActionL(playerInfo.limited) : setActionF(0)
		playerInfo.free ? setActionF(playerInfo.free) : setActionF(1)
	}, [playerInfo])

	const resetActions = () => {
		setActionM(playerInfo.main)
		setActionL(playerInfo.limited)
		setActionF(playerInfo.free)
		console.log('actions resetted to player values');
	}

	const useAction = (e) => {
		e.preventDefault()
		if (e.target.name === 'main' && actionM > 0) {
			console.log('main -1');
			setActionM(actionM - 1)
		}
		else if (e.target.name === 'limited' && actionL > 0) {
			console.log('limited -1');
			setActionL(actionL - 1)
		}
		else if (e.target.name === 'free' && actionF > 0) {
			console.log('free -1');
			setActionF(actionF - 1)
		} else {
			console.log("can't do that");
			window.alert("no more actions available")
		}
	}

	let list = playerInfo.feats.concat(basics)

	return (
		<div className="player-actions">
			<p>Préparez vos <b>techniques</b> à votre tour, et ce même si elles sont gratuites. Au début de votre tour vous récupérez toutes vos actions.</p>
			<button
				id='reset'
				className='action-btn'
				onClick={resetActions}>
				start your turn
			</button>

			<div className="player-feats-block">
				{(actionM > 0) &&
					<ActionsBlock
						type="principale"
						list={list}
						action={'main'}
						number={actionM}
						useAction={useAction}
					/>}
				{(actionL > 0 || actionM > 0) && <>
					<ActionsBlock
						type="limitée"
						list={list}
						action={'limited'}
						number={actionL}
						useAction={useAction}
					/>
				</>}
				{(actionF > 0 || actionL > 0 || actionM > 0) && <ActionsBlock
					type="gratuite"
					list={list}
					action={'free'}
					number={actionF}
					useAction={useAction}
				/>}

			</div>
		</div >
	)
}

export default PlayerActions