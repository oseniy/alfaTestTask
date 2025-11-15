export const productValidation = {
  title: {
    required: "Введите название",
    maxLength: { value: 100, message: "Максимальная длина: 100 символов" }
  },
  price: {
    required: "Введите цену",
    valueAsNumber: true,
    min: { value: 0, message: "Цена должна быть неотрицательна" }
  },
  description: {
    required: "Введите описание",
    maxLength: { value: 500, message: "Максимальная длина: 500 символов" }
  }
}
