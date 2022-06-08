<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
    {{-- <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script> --}}
    <title>ERP</title>
    <style>
        body {
            background-color: #171a21;
        }
    </style>
</head>
<body>
    @inertia

</body>
</html>
