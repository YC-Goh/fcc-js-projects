
const calcWidth = 'calc(max(25vw, 200px))';

export const styleApp = {
    width: calcWidth,
    height: `calc(1.25 * ${calcWidth})`,
    margin: `calc(0.5 * (100vh - 1.25 * ${calcWidth}) - 10vh) auto`,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
};

export const styleDisplay = {
    width: '100%',
    height: `calc(.25 * ${calcWidth} - 12px)`,
    margin: '0px',
    padding: '0px',
    border: '1px solid black',
    fontSize: `calc(.25 * .25 * ${calcWidth})`,
    textAlign: 'end',
    overflow: 'hidden',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around'
};

export const styleDisplayText = {
    margin: '0px',
    padding: '0px',
    width: '95%',
    overflow: 'scroll',
    whiteSpace: 'nowrap',
    textOverflow: 'clip',
    fontFamily: 'Monospace'
};

export const styleButton = {
    width: '25%',
    height: `calc(.25 * ${calcWidth})`,
    margin: '0',
    fontSize: `calc(.4 * .25 * ${calcWidth})`
};
