export interface IFeedbackMessage {
  id?: string
  type: 'success' | 'error'
  title: string
  text: string
}
