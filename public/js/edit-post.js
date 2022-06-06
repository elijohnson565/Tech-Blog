async function editFormHandler(event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value.trim();
  const postContent = document.querySelector('#post-content').value.trim();
  const userId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(userId);
  const response = await fetch(`/api/posts/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({postTitle, postContent}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);