import openai

# Set your OpenAI API key here
openai.api_key = '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'

def generate_tech_stack_recommendation(profile):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Use the chat model for GPT-3.5 Turbo
        messages=[
            {"role": "user", "content": f"Based on your profile and preferences, we recommend the following tech stack for your project:\n{profile}"}
        ],
        max_tokens=150  # Adjust the max_tokens as per your requirements
    )
    tech_stack = response['choices'][0]['message']['content']
    return tech_stack

user_profile = """
Name: John Doe
Age: 30
Experience: 5 years
Preferred Domain: machine learning
Preferred Language: Python
"""

tech_stack_recommendation = generate_tech_stack_recommendation(user_profile)
print(tech_stack_recommendation)
