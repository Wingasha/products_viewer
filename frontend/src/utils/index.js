export const utils = {
  imageToBase64 (image, callback) {
    /*
    image: изображение из поля `type="file"`
    callback: функция обратного вызова, которая принимает в качестве первого аргумента ошибку, а второго - закодированое
    изображение
     */
    let reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      callback(null, reader.result)
    }
    reader.onerror =  (error) => {
      callback(error, null)
    }
  }
}
