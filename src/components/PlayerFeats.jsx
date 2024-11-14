import { useContext } from "react"
import { LanguageContext } from "../store/languageContext"
import Collapsible from 'react-collapsible';

function PlayerFeats() {
	const { playerInfo } = useContext(LanguageContext)
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
			title: 'Bond/Marche discrete',
			action: 'limitée',
			type: 'Base',
			tooltip: "Vous réalisez un mouvement pour sortir de la mêlée (avec jet d'AGI) ou pour avancer furtivement. Votre distance est de MOU/4."

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
	return (
		<div className="player-feats-block">
			{<div>
				<h2>Principale</h2>
				{list
					.filter(e => e.action === 'principale')
					.sort((a, b) => {
						const nameA = a.title.toUpperCase()
						const nameB = b.title.toUpperCase()

						if (nameA < nameB) { return -1 }
						if (nameA > nameB) { return 1 }
						return 0
					})
					.map((e, i) =>
						<li key={`${i}-action-${e.title}`}>
							<div>
								<span
									className={`action ${e.color}`}>
								</span>
							</div>
							<Collapsible trigger={e.title} transitionTime={50} lazyRender={true}>
								<p className='tooltip-subtitle'>{e.type} - {e.action}</p>
								<p className='tooltip-content'>{e.tooltip}</p>
							</Collapsible>
						</li>
					)
				}
			</div>}
			{<div>
				<h2>Limitées</h2>
				{list
					.filter(e => e.action === 'limitée')
					.sort((a, b) => {
						const nameA = a.title.toUpperCase()
						const nameB = b.title.toUpperCase()

						if (nameA < nameB) { return -1 }
						if (nameA > nameB) { return 1 }
						return 0
					})
					.map((e, i) =>
						<li key={`${i}-action-${e.title}`}>
							<div>
								<span
									className={`action ${e.color}`}>
								</span>
							</div>
							<Collapsible trigger={e.title} transitionTime={50} lazyRender={true}>
								<p className='tooltip-subtitle'>{e.type} - {e.action}</p>
								<p className='tooltip-content'>{e.tooltip}</p>
							</Collapsible>
						</li>
					)
				}
			</div>}
			{<div>
				<h2>Gratuites</h2>
				{list
					.filter(e => e.action === 'gratuite')
					.sort((a, b) => {
						const nameA = a.title.toUpperCase()
						const nameB = b.title.toUpperCase()

						if (nameA < nameB) { return -1 }
						if (nameA > nameB) { return 1 }
						return 0
					})
					.map((e, i) =>
						<li key={`${i}-action-${e.title}`}>
							<div>
								<span
									className={`action ${e.color}`}>
								</span>
							</div>
							<Collapsible trigger={e.title} transitionTime={50} lazyRender={true}>
								<p className='tooltip-subtitle'>{e.type} - {e.action}</p>
								<p className='tooltip-content'>{e.tooltip}</p>
							</Collapsible>
						</li>
					)
				}
			</div>}
		</div >
	)
}

export default PlayerFeats