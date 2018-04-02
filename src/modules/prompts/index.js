import BioPrompt from 'modules/prompts/BioPrompt';
import InitialGreetingPrompt from 'modules/prompts/InitialGreetingPrompt';
import ThemePrompt from 'modules/prompts/ThemePrompt';

import PromptConstants from 'constants/PromptConstants';

const handler = {
  get(target, key) {
    return target[key] || InitialGreetingPrompt;
  },
};

export default new Proxy(
  {
    [PromptConstants.BIO_PROMPT]: BioPrompt,
    [PromptConstants.INITIAL_GREETING]: InitialGreetingPrompt,
    [PromptConstants.THEME]: ThemePrompt,
  },
  handler
);
