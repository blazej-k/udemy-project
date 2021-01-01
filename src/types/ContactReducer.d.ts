type ContactReducerType = Contact_SendRequest | MessagesError | FetchMessagesSuccess | MessageSended

type ContactReducer = {
    state: Message[],
    loading: boolean,
    error: string
}