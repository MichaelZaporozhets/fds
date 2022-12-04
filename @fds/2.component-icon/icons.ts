import X from './assets/x.svg';
import Plus from './assets/+.svg';
import Check from './assets/check.svg';
import Minimise from './assets/minimise.svg';
import Fullscreen from './assets/fullscreen.svg';
import Burger from './assets/hamburger.svg';
import Logo from './assets/logo.png';
import Information from './assets/information.svg';
import Files from './assets/files.svg';

import BuildResults from './assets/buildresults.svg';
import Components from './assets/components.svg';

import EcsOutliner from './assets/ecsoutliner.svg';
import EcsPrefab from './assets/ecsprefab.svg';
import EcsEntity from './assets/ecsentity.svg';

const icons = {
	logo: {
		src: Logo,
		alt: 'Frostbite Logo'
	},
	
	// utility
	x: {
		src: X,
		alt: 'X Icon'
	},
	plus: {
		src: Plus,
		alt: 'Plus Icon'
	},
	check: {
		src: Check,
		alt: 'Checkmark Icon'
	},
	burger: {
		src: Burger,
		alt: 'Hamburger Menu Icon'
	},
	minimise: {
		src: Minimise,
		alt: 'Minimise Icon'
	},
	fullscreen: {
		src: Fullscreen,
		alt: 'Fullscreen Icon'
	},
	information: {
		src: Information,
		alt: 'Information Icon'
	},
	files: {
		src: Files,
		alt: 'Files Icon'
	},

	// specific
	buildResults: {
		src: BuildResults,
		alt: 'BuildResults Icon'
	},
	components: {
		src: Components,
		alt: 'Components Icon'
	},

	ecsOutliner: {
		src: EcsOutliner,
		alt: 'ECS Outliner Icon'
	},
	ecsPrefab: {
		src: EcsPrefab,
		alt: 'ECS Prefab Icon'
	},
	ecsEntity: {
		src: EcsEntity,
		alt: 'ECS Entity Icon'
	}
}

export {
	icons
}