'use strict';

import ora from 'ora';

export default async (location) => {

	const spinner = ora(`Loading ${chalk.red('unicorns')}`).start();
	
	setTimeout(() => {
		spinner.color = 'yellow';
		spinner.text = 'Loading rainbows';
	}, 1000);
	
	spinner.stop();

  return location;
}
