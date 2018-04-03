import BioPrompt from 'modules/Prompter/BioPrompt';
import InitialGreetingPrompt from 'modules/Prompter/InitialGreetingPrompt';
import ThemePrompt from 'modules/Prompter/ThemePrompt';

import PromptConstants from 'constants/PromptConstants';

export default {
  [PromptConstants.BIO_PROMPT]: BioPrompt,
  [PromptConstants.INITIAL_GREETING]: InitialGreetingPrompt,
  [PromptConstants.THEME]: ThemePrompt,
};
