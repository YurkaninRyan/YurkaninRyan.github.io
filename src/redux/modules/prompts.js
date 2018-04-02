import PromptConstants from 'constants/PromptConstants';

const NEXT = 'ryan-yurkanin-pw/prompts/NEXT';
const PREVIOUS = 'ryan-yurkanin-pw/prompts/PREVIOUS';
const GOTO = 'ryan-yurkanin-pw/prompts/GOTO';

const initialState = {
  current: PromptConstants.INITIAL_GREETING,
  next: [],
  hasNext: false,
  previous: [],
  hasPrevious: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GOTO: {
      return {
        ...state,
        current: action.prompt,
        previous: [state.current, ...state.previous],
        hasPrevious: true,
        next: [],
        hasNext: false,
      };
    }

    case PREVIOUS: {
      if (!state.hasPrevious) {
        return state;
      }

      const [current, ...previous] = state.previous;

      return {
        ...state,
        current,
        previous,
        hasPrevious: previous.length > 0,
        next: [state.current, ...state.next],
        hasNext: true,
      };
    }

    case NEXT: {
      if (!state.hasNext) {
        return state;
      }

      const [current, ...next] = state.next;

      return {
        ...state,
        current,
        previous: [state.current, ...state.previous],
        hasPrevious: true,
        next,
        hasNext: next.length > 0,
      };
    }
    default:
      return state;
  }
}

export function goToPrompt(prompt) {
  return { type: GOTO, prompt };
}

export function goToPreviousPrompt() {
  return { type: PREVIOUS };
}

export function goToNextPrompt() {
  return { type: NEXT };
}
