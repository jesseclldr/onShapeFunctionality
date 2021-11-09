// This is a method of OnshapeClient, see OnshapeClient.js

export function getParts({
  documentId,
  workspaceId,
  versionId,
  microversionId,
  includeFlatParts,
  includePropertyDefaults,
  linkDocumentId,
  withThumbnails,
}) {
  return this.sendRequest({
    documentId,
    method: 'get',
    microversionId,
    query: {
      includeFlatParts,
      includePropertyDefaults,
      linkDocumentId,
      withThumbnails,
    },
    resource: 'parts',
    versionId,
    workspaceId,
  }).then(response => response.data)
}
