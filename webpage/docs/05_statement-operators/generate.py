import os

# Define the directory and file structure
sections = {
       "Statements and Operators": [
        "01_overview.md", "02_expressions-statements.md", "03_using-operators.md",
        "04_assignment-operator.md", "05_arithmetic-operators.md", "06_coding-exercise-assignment-operator.md",
        "07_coding-exercise-arithmetic-operators.md", "08_increment-decrement-operators.md", 
        "09_mixed-expressions-conversions.md", "10_testing-equality.md", "11_relational-operators.md",
        "12_logical-operators.md", "13_compound-assignment-operators.md", "14_operator-precedence.md",
        "15_coding-exercise-logical-operators.md", "16_section-challenge.md", "17_section-challenge-solution.md",
        "18_section-quiz.md"
    ],
    "Controlling Program Flow": [
        "01_overview.md", "02_if-statement.md", "03_coding-exercise-if-statement.md",
        "04_if-else-statement.md", "05_coding-exercise-if-else-statement.md", "06_nested-if-statements.md",
        "07_coding-exercise-nested-if-statements.md", "08_switch-case-statement.md",
        "09_coding-exercise-switch-case.md", "10_conditional-operator.md", "11_looping.md", 
        "12_for-loop.md", "13_coding-exercise-for-loop.md", "14_range-based-for-loop.md",
        "15_coding-exercise-range-based-loop.md", "16_while-loop.md", "17_coding-exercise-while-loop.md",
        "18_do-while-loop.md", "19_coding-exercise-do-while-loop.md", "20_continue-break.md",
        "21_infinite-loops.md", "22_nested-loops.md", "23_coding-exercise-nested-loops.md",
        "24_section-challenge.md", "25_section-challenge-solution-part1.md",
        "26_section-challenge-solution-part2.md", "27_section-quiz.md"
    ],
    "Characters and Strings": [
        "01_overview.md", "02_character-functions.md", "03_c-style-strings.md",
        "04_working-with-c-style-strings.md", "05_coding-exercise-c-style-strings.md",
        "06_cpp-strings.md", "07_working-with-cpp-strings.md", "08_coding-exercise-cpp-strings-1.md",
        "09_coding-exercise-cpp-strings-2.md", "10_section-challenge.md", "11_section-challenge-solution.md",
        "12_section-quiz.md", "13_challenge-assignment-letter-pyramid.md"
    ],
    "Functions": [
        "01_overview.md", "02_what-is-a-function.md", "03_coding-exercise-using-functions.md",
        "04_function-definition.md", "05_function-prototypes.md", "06_function-parameters-return-statement.md",
        "07_coding-exercise-functions-and-prototypes.md", "08_default-argument-values.md",
        "09_coding-exercise-default-arguments.md", "10_overloading-functions.md",
        "11_coding-exercise-overloading-functions.md", "12_passing-arrays-to-functions.md",
        "13_coding-exercise-passing-arrays.md", "14_pass-by-reference.md", "15_coding-exercise-pass-by-reference.md",
        "16_scope-rules.md", "17_how-function-calls-work.md", "18_inline-functions.md",
        "19_recursive-functions.md", "20_coding-exercise-recursive-function-1.md",
        "21_coding-exercise-recursive-function-2.md", "22_section-challenge.md", "23_section-challenge-solution.md",
        "24_section-quiz.md"
    ],
    "Pointers and References": [
        "01_overview.md", "02_what-is-a-pointer.md", "03_declaring-pointers.md",
        "04_accessing-pointer-address.md", "05_dereferencing-a-pointer.md", "06_dynamic-memory-allocation.md",
        "07_arrays-and-pointers.md", "08_pointer-arithmetic.md", "09_coding-exercise-swap-values.md",
        "10_const-and-pointers.md", "11_passing-pointers-to-functions.md", "12_returning-pointer-from-function.md",
        "13_coding-exercise-pointer-to-function.md", "14_coding-exercise-max-element.md",
        "15_coding-exercise-reverse-array.md", "16_coding-exercise-reverse-string.md", "17_pointer-pitfalls.md",
        "18_what-is-a-reference.md", "19_lvalues-and-rvalues.md", "20_using-codelite-debugger.md",
        "21_section-recap.md", "22_section-challenge.md", "23_section-challenge-solution.md",
        "24_section-quiz.md"
    ],
    "OOP - Classes and Objects": [
        "01_overview.md", "02_what-is-oop.md", "03_classes-and-objects.md",
        "04_declaring-class-and-creating-objects.md", "05_accessing-class-members.md",
        "06_coding-exercise-create-access-objects.md", "07_public-and-private.md",
        "08_implementing-member-methods.md", "09_coding-exercise-public-methods.md",
        "10_coding-exercise-add-more-methods.md", "11_constructors-and-destructors.md",
        "12_default-constructor.md", "13_coding-exercise-default-constructor.md",
        "14_overloading-constructors.md", "15_coding-exercise-overloaded-constructor.md",
        "16_constructor-initialization-lists.md", "17_delegating-constructors.md",
        "18_constructor-parameters-default-values.md", "19_copy-constructor.md",
        "20_coding-exercise-copy-constructor.md", "21_shallow-copying.md", "22_deep-copying.md",
        "23_move-constructors.md", "24_this-pointer.md", "25_const-with-classes.md",
        "26_static-class-members.md", "27_structs-vs-classes.md", "28_friends-of-class.md",
        "29_section-challenge.md", "30_section-challenge-solution.md", "31_section-quiz.md"
    ],
    "Operator Overloading": [
        "01_overview.md", "02_what-is-operator-overloading.md", "03_overloading-assignment-operator-copy.md",
        "04_overloading-assignment-operator-move.md", "05_overloading-operators-member-functions.md",
        "06_coding-exercise-operator-overloading-member.md", "07_overloading-operators-global-functions.md",
        "08_coding-exercise-operator-overloading-non-member.md", "09_overloading-stream-insertion-extraction.md",
        "10_coding-exercise-stream-insertion-operator.md", "11_section-challenge.md",
        "12_section-challenge-solution1.md", "13_section-challenge-solution2.md", "14_section-quiz.md"
    ],
    "Inheritance": [
        "01_overview.md", "02_what-is-inheritance.md", "03_terminology-and-notation.md",
        "04_inheritance-vs-composition.md", "05_deriving-classes-from-existing.md",
        "06_protected-members-class-access.md", "07_constructors-and-destructors.md",
        "08_passing-arguments-to-base-constructors.md", "09_copy-move-constructors-derived-classes.md",
        "10_redefining-base-methods.md", "11_multiple-inheritance.md", "12_updated-accounts-example.md",
        "13_section-challenge.md", "14_section-challenge-solution.md", "15_section-quiz.md"
    ],
    "Polymorphism": [
        "01_overview.md", "02_what-is-polymorphism.md", "03_using-base-class-pointer.md",
        "04_virtual-functions.md", "05_virtual-destructors.md", "06_using-override-specifier.md",
        "07_coding-exercise-inheritance-lion.md", "08_coding-exercise-inheritance-dog.md",
        "09_using-final-specifier.md", "10_using-base-class-references.md",
        "11_pure-virtual-functions-abstract-classes.md", "12_abstract-classes-as-interfaces.md",
        "13_section-challenge.md", "14_section-challenge-solution-part1.md",
        "15_section-challenge-solution-part2.md", "16_section-challenge-final-solution.md", "17_section-quiz.md"
    ],
    "Smart Pointers": [
        "01_overview.md", "02_issues-with-raw-pointers.md", "03_what-is-smart-pointer.md",
        "04_unique-pointers.md", "05_shared-pointers.md", "06_weak-pointers.md",
        "07_custom-deleters.md", "08_section-challenge1.md", "09_section-challenge1-solution.md",
        "10_section-quiz.md"
    ],
    "Exception Handling": [
        "01_overview.md", "02_basic-concepts-dividing-by-zero.md", "03_throwing-exception-from-function.md",
        "04_handling-multiple-exceptions.md", "05_stack-unwinding.md",
        "06_creating-user-defined-exception-classes.md", "07_class-level-exceptions.md",
        "08_std-exception-class-hierarchy.md", "09_section-challenge.md",
        "10_section-challenge-solution.md", "11_section-quiz.md"
    ],
    "IO and Streams": [
        "01_overview.md", "02_files-streams-io.md", "03_stream-manipulators.md",
        "04_stream-manipulators-boolean.md", "05_stream-manipulators-integers.md",
        "06_stream-manipulators-floating-point.md", "07_stream-manipulators-align-fill.md",
        "08_section-challenge1.md", "09_section-challenge1-solution.md", "10_reading-from-text-file.md",
        "11_reading-text-file-live-demo1.md", "12_reading-text-file-live-demo2.md",
        "13_coding-exercise-reading-text-file.md", "14_section-challenge2.md",
        "15_section-challenge2-solution.md", "16_section-challenge3.md",
        "17_section-challenge3-solution.md", "18_writing-to-text-file.md",
        "19_writing-text-file-live-demo.md", "20_section-challenge4.md",
        "21_section-challenge4-solution.md", "22_using-string-streams.md",
        "23_file-locations-popular-ides.md", "24_section-quiz.md"
    ],
    "Standard Template Library": [
        "01_overview.md"
    ],
    "Lambda Expressions": [
        "01_overview.md"
    ]
}

# Function to create folders and files
def create_folders_and_files(base_path, structure):
    for section, files in structure.items():
        section_path = os.path.join(base_path, section.replace(" ", "_"))
        os.makedirs(section_path, exist_ok=True)
        for file in files:
            file_path = os.path.join(section_path, file)
            with open(file_path, 'w') as f:
                f.write(f"# {file.replace('_', ' ').replace('.md', '').title()}\n")

# Set the base directory
base_directory = "Course_Content"

# Create the folders and files
create_folders_and_files(base_directory, sections)

print(f"Folders and files created under '{base_directory}' directory.")
