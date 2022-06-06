async function commentFormHandler(event) {
  event.preventDefault();

  const commentInnerText = document.querySelector('textarea[name="comment-body"]').value.trim();
  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (commentInnerText) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentInnerText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);