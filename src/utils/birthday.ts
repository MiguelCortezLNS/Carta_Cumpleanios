// Fecha de nacimiento (año, mes-1, día)
export const BIRTHDAY_DATE = new Date(2002, 3, 17) // 17 de abril de 2002

export function calcularEdad(fechaNacimiento: Date): number {
  const hoy = new Date()
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  const mes = hoy.getMonth() - fechaNacimiento.getMonth()
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--
  }
  return edad
}
