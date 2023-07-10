from app.utils.functions import get_db
from contextlib import closing
from app.models.model import Subject
from app.utils.functions import get_templates
# from app.models.schema import TaskSchema


templates = get_templates()


def add_subjects():
    subjects = [
        "General",
        "Accounting",
        "Algebra",
        "Applied Sciences",
        "Architecture and Design",
        "Art & Design",
        "Biology",
        "Business & Finance",
        "Calculus",
        "Chemistry",
        "Communications",
        "Computer Science",
        "Economics",
        "Engineering",
        "English",
        "Environmental Science",
        "Article Writing",
        "Film",
        "Foreign Languages",
        "Geography",
        "Geology",
        "Geometry",
        "Health & Medical",
        "History",
        "HR Management",
        "Information Systems",
        "Law",
        "Literature",
        "Management",
        "Marketing",
        "Math",
        "Numerical Analysis",
        "Philosophy",
        "Physics",
        "Precalculus",
        "Political Science",
        "Psychology",
        "Programming",
        "Science",
        "Social Science",
        "Statistics"
        ]
    with closing(get_db()) as db: 
        for name in subjects:
            task = Subject(name=name)
            db.add(task)  # Add the task to the session
        db.commit()
