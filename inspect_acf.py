import json

with open('/Users/user/Documents/Mendoza/Assets/export-actual.json', 'r') as f:
    data = json.load(f)

# Let's inspect the groups
print(f"Total groups: {len(data)}")
for group in data:
    print(f"- {group.get('key')} ({group.get('title')}) [Location: {group.get('location')}]")
