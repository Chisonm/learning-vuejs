import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList
    },
    template: `
        <section>
            <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>

            <form @submit.prevent="addAssignment">
                <label for="new-assignment" class="block text-white text-sm font-bold mb-2">Add Assignment</label>
                <div class="border border-gray-600">
                    <input v-model="newAssignment" type="text" placeholder="New Assignment" class="p-2 text-black">
                    <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border-l">Add</button>
                </div>
            </form>
        </section>
        `,
    data () {
        return {
            assignments: [
                { name: 'Finish project', completed: false, id: 1},
                { name: 'Read chapter 4', completed: false, id: 2},
                { name: 'Turn in homework', completed: false, id: 3}
            ],

            newAssignment: ''
        }
    },
    computed : {
        filters () {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.completed),
                completed: this.assignments.filter(assignment => assignment.completed)
            }
        }
    },
    methods: {
        addAssignment () {
                this.assignments.push({
                    name: this.newAssignment,
                    completed: false,
                    id: this.assignments.length + 1
                })
                this.newAssignment = ''
            }
    }
}