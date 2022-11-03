import create from 'zustand';

//state global tanpa persist
const apiStore = create((set) => ({
  errorServer: {},
  setErrorServer: (errorServer) => {
    set({errorServer});
  },

  isNetworkError: false,
  setIsNetworkError: (isNetworkError) => {
    set({isNetworkError});
  },
}));

export default apiStore;
