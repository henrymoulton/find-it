// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $id: ID
    $name: String
    $completed: Boolean
    $userPhotoUrl: String
    $silhouetteUrl: String
  ) {
    onCreateTodo(
      id: $id
      name: $name
      completed: $completed
      userPhotoUrl: $userPhotoUrl
      silhouetteUrl: $silhouetteUrl
    ) {
      id
      name
      completed
      userPhotoUrl
      silhouetteUrl
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $id: ID
    $name: String
    $completed: Boolean
    $userPhotoUrl: String
    $silhouetteUrl: String
  ) {
    onUpdateTodo(
      id: $id
      name: $name
      completed: $completed
      userPhotoUrl: $userPhotoUrl
      silhouetteUrl: $silhouetteUrl
    ) {
      id
      name
      completed
      userPhotoUrl
      silhouetteUrl
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $id: ID
    $name: String
    $completed: Boolean
    $userPhotoUrl: String
    $silhouetteUrl: String
  ) {
    onDeleteTodo(
      id: $id
      name: $name
      completed: $completed
      userPhotoUrl: $userPhotoUrl
      silhouetteUrl: $silhouetteUrl
    ) {
      id
      name
      completed
      userPhotoUrl
      silhouetteUrl
    }
  }
`;
