import BioPrompt from 'modules/Prompter/BioPrompt';
import HappyClappingPrompt from 'modules/Prompter/HappyClappingPrompt';
import InitialGreetingPrompt from 'modules/Prompter/InitialGreetingPrompt';
import MoreFeaturesPrompt from 'modules/Prompter/MoreFeaturesPrompt';
import ThemePrompt from 'modules/Prompter/ThemePrompt';

import PromptConstants from 'constants/PromptConstants';

export default {
  [PromptConstants.BIO]: BioPrompt,
  [PromptConstants.HAPPY_CLAPPING]: HappyClappingPrompt,
  [PromptConstants.INITIAL_GREETING]: InitialGreetingPrompt,
  [PromptConstants.MORE_FEATURES]: MoreFeaturesPrompt,
  [PromptConstants.THEME]: ThemePrompt,
};
