const buildColor = ({
	
}) => {
	return {

	}
}

const palette = {
	gray: {
		'025': '#0A0A0A',
		'050': '#191919',
		'075': '#212121',
		'080': '#242424',
		'085': '#282828',
		'100': '#2F2F2F',
		'125': '#333333',
		'150': '#373737',
		'160': '#3B3B3B',
		'175': '#404040',
		'200': '#555555',
		'250': '#606060',
		'300': '#737373',
		'400': '#969696',
		'450': '#A3A3A3',
		'475': '#BEBEBE',
		'500': '#D5D5D5',
		'600': '#F6F6F6',
	},
	blue: {
		'300': '#0046AC',
		'400': '#0064CC',
		'500': '#0072EA',
		'600': '#29A2FF',
		'700': '#3EB4FF',
		'900': '#BCE2FF'
	},
	red: {
		'075': '#BE3B47',
		'400': '#FF6674'
	},
	yellow: {
		'400': '#FFE964'
	},
	green: {
		'075': '#43795B',
		'400': '#00E18B'
	}
}

const featurePalette = {
	AI: '#E894D0',
	AnimationCinematics: '#D94155',
	Assets: '#A4C61A',
	Audio: '#EA4E9D',
	ECS: '#208EA3',
	Effects: '#FD817D',
	Input: '#AA71FF',
	LevelsTerrain: '#37A862',
	Lighting: '#EECC16',
	Networking: '#AA71FF',
	Physics: '#FD612C',
	Schematics: '#AA71FF',
	ShadersRendering: '#FDAE33',
	UIRime: '#3E9AEE',
	Uncategorised: '#8D9F9B'
}

const tokens = {
	text: {
		ActionableShortcutTextColor: palette.gray['600'],
		BodyTextDefaultColor: palette.gray['500'],
		BodyTextDisabledColor: palette.gray['300'],
		BodyTextMouseOverColor: palette.gray['600'],
		BodyTextFocusedColor: palette.gray['600'],
		BodyTextUnfocusedColor: palette.gray['450'],
		BodyTextReadOnlyColor: palette.gray['400'],
		DetailTextDefaultColor: palette.gray['450'],
		DialogButtonTextDefaultColor: palette.gray['600'],
		DialogButtonSecondaryTextMouseOverColor: palette.gray['025'],
		HeadingTextColor: palette.gray['600'],
		NotificationCountTextDefaultColor: palette.gray['025'],
		WatermarkTextDefaultColor: palette.gray['300'],
	},
	layout: {
		ApplicationBackgroundDefaultColor: palette.gray['025'],
		CanvasBackgroundDefaultColor: palette.gray['050'],
		CanvasBackgroundDisabledColor: palette.gray['150'],
		CanvasBorderDefaultColor: palette.gray['300'],
		CanvasBorderMouseOverColor: palette.gray['400'],
		OverlayBackgroundDefaultColor: palette.gray['050'],
		OverlayBorderDefaultColor: palette.gray['200'],
		OverlayBorderDefault02Color: palette.gray['150'],
		PanelBackgroundDefaultColor: palette.gray['100'],
		PanelBackgroundMouseOverColor: palette.gray['200'],
		PanelBorderDefaultColor: palette.gray['300'],
		PanelBorderFocusedColor: palette.gray['400'],
		TabControlBackgroundDefaultColor: palette.gray['075'],
		VerticalTabControlBackgroundDefaultColor: palette.gray['085']
	},
	component: {
		// 
		AlternatingRowBackgroundColor: palette.gray['085'],
		AlternatingRowSubsectionBackgroundColor: palette.gray['080'],
		// 
		DataGridAlternatingRowBackground: palette.gray['175'],
		PropertyCategoryExpanderBackgroundColor: palette.gray['160'],
		PropertySubCategoryExpanderBackgroundColor: palette.gray['125'],

		GridSplitterDefaultColor: palette.gray['200'],
		GridSplitterMouseOverColor: palette.gray['300'],

		LayoutSplitterDefaultColor: palette.gray['025'],
		LayoutSplitterMouseOverColor: palette.gray['200'],

		MenuBarItemMouseOverColor: palette.gray['200'],
		MenuBarItemPressedColor: palette.gray['175'],

		PanelSplitterMajorColor: palette.gray['050'],
		PanelSplitterMinorColor: palette.gray['085'],

		ProgressBarTrackBackgroundDefault01Color: palette.gray['150'],

		ScrollbarTroughThumbColor: palette.gray['250'],
		ScrollbarTroughDefaultColor: palette.gray['085'],

		SeparatorBackground01Color: palette.gray['200'],
		SeparatorBackground02Color: palette.gray['150'],

		UIControlBackgroundDefault01Color: palette.gray['075'],
		UIControlBackgroundDefault02Color: palette.gray['400'],
		UIControlBackgroundDefault03Color: palette.gray['150'],
		UIControlBackgroundDisabled02Color: palette.gray['150'],
		UIControlBackgroundFocused01Color: palette.gray['600'],
		UIControlBackgroundMouseOver01Color: palette.gray['150'],
		UIControlBackgroundMouseOver02Color: palette.gray['600'],
		UIControlBackgroundMouseOver03Color: palette.gray['175'],
		UIControlBackgroundPressed01Color: palette.gray['600'],
		UIControlBackgroundPressed02Color: palette.gray['400'],
		UIControlBackgroundPressed03Color: palette.gray['200'],
		UIControlBackgroundSelected01Color: palette.gray['150'],
		UIControlBackgroundSelectedInactiveColor: palette.gray['200']
	},
	input: {
		InputBackgroundDefaultColor: palette.gray['075'],
		InputBackgroundDisabledColor: palette.gray['150'],
		InputBorderDefaultColor: palette.gray['160'],
		InputBorderDisabledColor: palette.gray['150'],
		InputBorderMouseOverColor: palette.gray['200']
	}
}

const color = {
	palette,
	featurePalette,
	tokens
}

export {
	color
}