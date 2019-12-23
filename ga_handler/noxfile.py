import nox

@nox.session
def tests(session):
    session.install('flask', 'mock', 'pytest')
    session.run('pytest')

@nox.session
def lint(session):
    session.install('flake8')
    session.run('flake8', 'main.py', 'main_test.py')
