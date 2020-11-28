export interface IAlertMessage {
  id?: string
  type: 'success' | 'error'
  title: string
  text: string
}
