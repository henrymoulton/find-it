/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  name: string,
  completed: boolean,
  userPhotoUrl: string,
  silhouetteUrl: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  completed?: boolean | null,
  userPhotoUrl?: string | null,
  silhouetteUrl?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type TableTodoFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  completed?: TableBooleanFilterInput | null,
  userPhotoUrl?: TableStringFilterInput | null,
  silhouetteUrl?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    userPhotoUrl: string,
    silhouetteUrl: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    userPhotoUrl: string,
    silhouetteUrl: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    userPhotoUrl: string,
    silhouetteUrl: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    userPhotoUrl: string,
    silhouetteUrl: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: TableTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "TodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      userPhotoUrl: string,
      silhouetteUrl: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  completed?: boolean | null,
  userPhotoUrl?: string | null,
  silhouetteUrl?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    userPhotoUrl: string,
    silhouetteUrl: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  completed?: boolean | null,
  userPhotoUrl?: string | null,
  silhouetteUrl?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    userPhotoUrl: string,
    silhouetteUrl: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  completed?: boolean | null,
  userPhotoUrl?: string | null,
  silhouetteUrl?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    userPhotoUrl: string,
    silhouetteUrl: string,
  } | null,
};
