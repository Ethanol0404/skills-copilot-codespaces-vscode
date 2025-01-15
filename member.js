function skillsMembers(){
    // Get the data from the member page
    var members = document.querySelector('.member-list').querySelectorAll('.member');
    var skills = [];
    var membersArray = [];

    members.forEach(member => {
        var memberData = {
            'name': member.querySelector('.member-name').innerText,
            'skills': []
        };

        var skillsList = member.querySelector('.member-skills').querySelectorAll('li');

        skillsList.forEach(skill => {
            memberData.skills.push(skill.innerText);
            if (!skills.includes(skill.innerText)){
                skills.push(skill.innerText);
            }
        });

        membersArray.push(memberData);
    });

    return {
        'skills': skills,
        'members': membersArray
    };

}