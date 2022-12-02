


// profile user
export const TheProfile = (history, form) => {

    return form ?   history.push(`/sw/restaurants/admin/notification/`) : history.push(`/sw/fex/profil/personal/`)
}

// profile user
export const LikePage = (history) => {

    return history.push(`/sw/personal/like/`)
}