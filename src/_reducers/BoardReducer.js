const board = (state = { columns: [] }, action) => {
    switch (action.type) {
      case "ADD_COLUMN": {
        const { columnId } = action.payload;
        return { columns: [...state.columns, columnId] };
      }
      default:
        return state;
    }
  };