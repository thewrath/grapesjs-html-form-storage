const masterPlugin = (editor, opt = {}) => {

  const getStorageElement = (elementId) => {
      if (!elementId) {
        throw new Error('Missing storage element id.');
      }

      const storageElement = document.getElementById(elementId);

      if (!(storageElement instanceof HTMLInputElement) || storageElement.type !== 'text') {
        throw new Error('Need text input as storage element.');
      }

      return storageElement;
  }

  const storageElement = getStorageElement(opt['storageElementId']);

  editor.StorageManager.add('html-form-storage', {

    /**
     * Load the data
     * @param  {Array} keys Array containing values to load, eg, ['gjs-components', 'gjs-styles', ...]
     * @param  {Function} clb Callback function to call when the load is ended
     * @param  {Function} clbErr Callback function to call in case of errors
     */
    load(keys, clb, clbErr) {
      const result = {};

      if (storageElement.value) {
        const storage = JSON.parse(storageElement.value);

        keys.forEach(key => {
          const value = storage[key];
          if (value) {
            result[key] = value;
          }
        });
      }

      // Might be called inside some async method
      clb(result);
    },

    /**
     * Store the data
     * @param  {Object} data Data object to store
     * @param  {Function} clb Callback function to call when the load is ended
     * @param  {Function} clbErr Callback function to call in case of errors
     */
    store(data, clb, clbErr) {
      for (let key in data) {
        storage[key] = data[key];
      }

      storageElement.value = JSON.stringify(storage);

      // Might be called inside some async method
      clb();
    }

  });

};
export default masterPlugin;
