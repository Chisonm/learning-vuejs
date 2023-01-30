import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList
    },
    template: `
       <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
       <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
        `,
    data () {
        return {
            assignments: [
                { name: 'Finish project', completed: false, id: 1},
                { name: 'Read chapter 4', completed: false, id: 2},
                { name: 'Turn in homework', completed: false, id: 3}
            ]
        }
    },
    computed : {
        filters () {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.completed),
                completed: this.assignments.filter(assignment => assignment.completed)
            }
        }
    }
}