const buildType = ({
	
}) => {
	return {

	}
}

const families = {
	SourceSansPro: {
		url: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap',
		fontFamily: `'Source Sans Pro', sans-serif`
	},
	Consolas: {
		url: '',
		fontFamily: `Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;`
	}
}

const palette = {
	Heading: {
		XL: {
			strong: {
				fontSize: 22,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		},
		L: {
			strong: {
				fontSize: 18,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		},
		M: {
			strong: {
				fontSize: 16,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		},
		S: {
			strong: {
				fontSize: 13,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		}
	},
	Body: {
		S: {
			normal: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 400,
				fontStyle: false
			},
			strong: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			},
			strikethrough: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 400,
				fontStyle: false
			},
			boldStrikethrough: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		}
	}
}

const tokens = {
	Heading: {
		XL: {
			strong: {
				fontSize: 22,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		},
		L: {
			strong: {
				fontSize: 18,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		},
		M: {
			strong: {
				fontSize: 16,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		},
		S: {
			strong: {
				fontSize: 13,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		}
	},
	Body: {
		S: {
			normal: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 400,
				fontStyle: false
			},
			strong: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			},
			strikethrough: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 400,
				fontStyle: false
			},
			boldStrikethrough: {
				fontSize: 12,
				lineHeight: 1,
				font: families.SourceSansPro.fontFamily,
				fontWeight: 600,
				fontStyle: false
			}
		}
	}
}

const typography = {
	families,
	palette,
	tokens
}

export {
	typography
}