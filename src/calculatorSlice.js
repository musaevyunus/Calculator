import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    num1: '',
    num2: '',
    operator: '',
    result: '',
  },
  reducers: {
    setNumber: (state, action) => {
      const { number, input } = action.payload;
      if (input === 'num1') {
        state.num1 += number;
      } else if (input === 'num2') {
        state.num2 += number;
      }
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
    },
    calculateResult: (state) => {
      const { num1, num2, operator } = state;
      let result = '';
      switch (operator) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          break;
      }
      state.result = result.toString();
    },
    resetCalculator: (state) => {
      state.num1 = '';
      state.num2 = '';
      state.operator = '';
      state.result = '';
    },
  },
});

export const {
  setNumber,
  setOperator,
  calculateResult,
  resetCalculator,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

